class Page {
  constructor(query, defaultPerpage) {
    this.page     = +(query.page || 1);
    this.perPage  = +(query.per_page || defaultPerpage || 10);
    this.limit    = +(query.limit || this.perPage);
    this.offset   = +(query.offset || this.perPage * (this.page - 1))
  }
}

module.exports = Page;