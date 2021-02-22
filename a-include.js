class AInclude extends HTMLElement {

  get selector() {
    return this.getAttribute('selector');
  }

  get token() {
    return this.getAttribute('token');
  }

  connectedCallback() {
    let a = this.querySelector("a:first-of-type");
    if (!a) {
      throw new Error(
          `No link <a href=""> specified within <a-include> element.`);
    }
    let href = a.getAttribute("href");

    fetch(
        href,
        {
          headers: this.getHeaders()
        })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Server returned http status ${response.status}`);
      }
      return response.text();
    })
    .then(html => this.filterContent(html))
    .then(html => this.replace(html));
  }

  getHeaders() {
    if (this.token) {
      return {
        'Authorization': 'Bearer ' + this.token
      }
    } else {
      return {};
    }
  }

  filterContent(html) {
    html = html.trim();
    if (this.selector) {
      let template = document.createElement("template");
      template.innerHTML = html;
      html = template.content.querySelector(this.selector).outerHTML;
    }
    return html;
  }

  replace(html) {
    let template = document.createElement("template");
    template.innerHTML = html;
    this.replaceWith(...template.content.childNodes);
  }
}

customElements.define('a-include', AInclude);
