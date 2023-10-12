import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schema} from './sanity/schema'

const config =  defineConfig({
  basePath: '/studio',
  projectId: "bqmtp5or",
  dataset: "broadband",
  title: "SDID_Inform", 
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [deskTool()],
})

export default config;

