import request from 'superagent';

export async function fetchStatesForCountry(country = 'India') {
  const res = await request
    .post('https://countriesnow.space/api/v0.1/countries/states')
    .set('Content-Type', 'application/json')
    .send({ country })
    .timeout({ deadline: 10000 });

  const list = res?.body?.data?.states
    ?.map((s) => s?.name)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b)) ?? [];

  return list;
}

export async function fetchCitiesForCountryState(country = 'India', stateName) {
  const res = await request
    .post('https://countriesnow.space/api/v0.1/countries/state/cities')
    .set('Content-Type', 'application/json')
    .send({ country, state: stateName })
    .timeout({ deadline: 10000 });

  const list = res?.body?.data ?? [];
  return Array.isArray(list) ? list.sort((a, b) => a.localeCompare(b)) : [];
}


