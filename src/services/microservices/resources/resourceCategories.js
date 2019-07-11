import ajax from "$services/ajax";

class ResourceCategories {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  list(outletId, page = 0, ipp = 10) {
    return ajax.get(`${this.baseUrl}/outlets/${outletId}/resource_categories`, { page, size: ipp });
  }

  show(outletId, resourceCategoryId) {
    return ajax.get(`${this.baseUrl}/outlets/${outletId}/resource_categories/${resourceCategoryId}`);
  }

  create(outletId, categoryPayload) {
    return ajax.post(`${this.baseUrl}/outlets/${outletId}/resource_categories`, null, categoryPayload);
  }

  update(outletId, resourceCategoryId, categoryPayload) {
    return ajax.put(`${this.baseUrl}/outlets/${outletId}/resource_categories/${resourceCategoryId}`, null, categoryPayload);
  }

  delete(outletId, resourceCategoryId) {
    return ajax.delete(`${this.baseUrl}/outlets/${outletId}/resource_categories/${resourceCategoryId}`);
  }
}

export default ResourceCategories;
