import ajax from "$services/ajax";

class ChildResourceCategories {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  list(resourceCategoryId, page = 0, ipp = 10) {
    return ajax.get(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resource_categories`, { page, size: ipp });
  }

  show(resourceCategoryId, childCategoryId) {
    return ajax.get(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resource_categories/${childCategoryId}`);
  }

  create(resourceCategoryId, categoryPayload) {
    return ajax.post(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resource_categories`, null, categoryPayload);
  }

  update(resourceCategoryId, childCategoryId, categoryPayload) {
    return ajax.put(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resource_categories/${childCategoryId}`, null, categoryPayload);
  }

  delete(resourceCategoryId, childCategoryId) {
    return ajax.delete(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resource_categories/${childCategoryId}`);
  }
}

export default ChildResourceCategories;
