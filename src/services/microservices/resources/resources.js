import ajax from "$services/ajax";

class Resources {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  list(resourceCategoryId, page = 0, ipp = 10) {
    return ajax.get(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resources`, { page, size: ipp });
  }

  show(resourceCategoryId, resourceId) {
    return ajax.get(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resources/${resourceId}`);
  }

  create(resourceCategoryId, resourcePayload) {
    return ajax.post(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resources`, null, resourcePayload);
  }

  update(resourceCategoryId, resourceId, resourcePayload) {
    return ajax.put(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resources/${resourceId}`, null, resourcePayload);
  }

  delete(resourceCategoryId, resourceId) {
    return ajax.delete(`${this.baseUrl}/resource_categories/${resourceCategoryId}/resources/${resourceId}`);
  }
}

export default Resources;
