import {API_SERVER_URL, API_TYPES} from "../constants/constants";

class ApiService {
  constructor(route) {
    this.route = route;
    this.url = API_SERVER_URL;
  }

  get({page, limit, id}) {
    const queries = page && limit ? `?_page=${page}&_limit=${limit}` : '';
    return fetch(`${this.url}/${this.route}${queries}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
  };

  getByID(id) {
    return fetch(`${this.url}/${this.route}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
  };

  post(data) {
    return fetch(`${this.url}/${this.route}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(data => data.json())
  };

  put(id, data) {
    return fetch(`${this.url}/${this.route}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(data => data.json())
  };

  delete(id) {
    return fetch(`${this.url}/${this.route}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
  }
}

export class CreateApiService {
  constructor(apiType) {
    if (apiType === API_TYPES.cars) {
      return new ApiService('cars');
    }

    if (apiType === API_TYPES.personal) {
      return new ApiService('personal');
    }

    if (apiType === API_TYPES.login) {
      return new ApiService('login');
    }
  }
}
