// src/mock/mockCriteria.js
import MockAdapter from 'axios-mock-adapter';

export function mockCriteria(axiosInstance) {
    const mock = new MockAdapter(axiosInstance);

    mock.onGet('/user/list').reply(200, {
        'list|1-10': [{
            'id|+1': 1,
            name: '@cname',
            'age|15-25': 1,
            city: '@county(true)'
        }]
    });
}
