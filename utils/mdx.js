import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const DOCS_PATH = join(process.cwd(), '_docs')

function getDocsFilePaths() {
  return (
    fs
      .readdirSync(DOCS_PATH)
      .filter((path) => /\.mdx?$/.test(path))
  );
}

export function getDocs(slug) {

  const fullPath = join(DOCS_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { data, content }
}

export function getDocsItems(filePath, fields) {
  const slug = filePath.replace(/\.mdx?$/, '')
  const { data, content } = getDocs(slug)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllDocs(fields) {
  const filePaths = getDocsFilePaths()
  const docs = filePaths
    .map((filePath) => getDocsItems(filePath, fields))
  return docs
}
