import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'own1xp2n',
  dataset: 'production',
  apiVersion: '2023-03-10',
  useCdn: true,
  token: 'skwepaXjY4X9TvDsja6rJWL6pQIbJdkSpNBm9S15V9GvffNsO6MIIfDPDYk5z8Ue0f79Jpff7x81xRQXwJcMRgBDKw5uHkfRFWkq8tvImBMAAXeHfJsVfyP3OvGnuaSZVFEZAYWnja3aJdbRFJAFnyY8oAndVjh2rVgpDH8bPTXb3HkdSLek'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);