const getHeaders = async () => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  return headers;
};

class Api {
  config = { baseURL: process.env.ENDPOINT };
  dispatch = null;

  checkResponseStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    throw new Error(response.statusText);
  }

  async get(uri) {
    const init = {
      headers: await getHeaders(),
      credentials: 'include',
    };
    const response = await fetch(`${this.config.baseURL}${uri}`, init);

    this.checkResponseStatus(response);

    return response.json();
  }

  async post(uri, body = {}) {
    const response = await fetch(`${this.config.baseURL}${uri}`, {
      method: 'POST',
      headers: await getHeaders(),
      body: JSON.stringify(body),
    });

    this.checkResponseStatus(response);

    if (response.status === 204) {
      return null;
    }

    return response.json();
  }

  async put(uri, params = {}) {
    const response = await fetch(`${this.config.baseURL}${uri}`, {
      method: 'PUT',
      headers: await getHeaders(),
      body: JSON.stringify(params),
    });

    this.checkResponseStatus(response);

    return response.json();
  }
}

export default Api;
