import ajax from "$services/ajax";

class Outlets {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  list(page = 0, ipp = 10) {
    return ajax.get(`${this.baseUrl}/outlets`, { page, size: ipp });
  }

  show(outletId) {
    return ajax.get(`${this.baseUrl}/outlets/${outletId}`);
  }

  create(outletPayload) {
    return ajax.post(`${this.baseUrl}/outlets`, null, outletPayload);
  }

  update(outletId, outletPayload) {
    return ajax.put(`${this.baseUrl}/outlets/${outletId}`, null, outletPayload);
  }

  delete(outletId) {
    return ajax.delete(`${this.baseUrl}/outlets/${outletId}`);
  }
}

export default Outlets;
