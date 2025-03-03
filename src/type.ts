export type ReComponentName = (
  title: string,
  fileName: string,
  path: string,
) => string

export type ReDocUrl = (
  fileName: string,
  header?: string,
  path?: string,
) => string | undefined

export type ReAttribute = (
  value: string,
  key: string,
  columns: string[],
  title: string,
) => string | undefined

export type ReVeturDescription = (
  description?: string,
  defaultValue?: string,
  docUrl?: string,
) => string | undefined

export type ReWebTypesSource = (
  title: string,
  fileName: string,
  path: string,
) => Source

export interface OptionsConfig {
  entry: string
  outDir: string
  name: string
  version: string
  space?: string | number
  reComponentName?: ReComponentName
  reDocUrl?: ReDocUrl
  reAttribute?: ReAttribute
  reVeturDescription?: ReVeturDescription
  reWebTypesSource?: ReWebTypesSource
}

export interface Config {
  tags: string
  attributes: string
  webTypes: string
  titleRegExp: RegExp | string
  tableRegExp: RegExp | string
  fileNameRegExp: RegExp | string
  separator: string
  props: string
  propsName: string
  propsType: string
  propsDescription: string
  propsOptions: string
  propsDefault: string
  events: string
  eventsName: string
  eventsDescription: string
  slots: string
  slotsName: string
  slotsDescription: string
  slotsSubtags: string
  directives: string
  directivesName: string
  directivesType: string
  directivesDescription: string
}

export type InstallOptions = OptionsConfig & Partial<Config>

export type Options = OptionsConfig & Config

export interface ParseHeader {
  title?: string
  description?: string
}

export type ParseTableColumn = Record<string, string | undefined>

export interface ParseTable {
  title: string
  content: ParseTableColumn[]
}

export interface ParseData {
  title?: string
  description?: string
  table?: ParseTable[]
  headers?: ParseHeader[]
}

export interface NormalizeData extends ParseData {
  path: string
  fileName: string
  props?: ParseTable
  events?: ParseTable
  slots?: ParseTable
  directives?: ParseTable
  children?: NormalizeData[]
}

export interface Tags {
  [key: string]: {
    attributes?: string[]
    subtags?: string[]
    description?: string
  }
}

export interface Props {
  [key: string]: {
    type?: string
    options?: string[]
    description?: string
  }
}

export interface WebEvent {
  name: string
  description?: string
  'doc-url'?: string
}

export interface WebSlot {
  name: string
  description?: string
  'doc-url'?: string
}

export interface WebAttribute {
  name: string
  description?: string
  'doc-url'?: string
  default?: string
  value?: {
    type: string
    kind: string
  }
}

export type Source =
  | {
      module?: string
      symbol: string
    }
  | {
      file: string
      offset: number
    }

export interface WebTag {
  name: string
  source: Source
  description?: string
  'doc-url'?: string
  attributes?: WebAttribute[]
  events?: WebEvent[]
  slots?: WebSlot[]
}

export interface WebDirective {
  name: string
  source: Source
  description?: string
  'doc-url'?: string
  value?: {
    type: string
    kind: string
  }
}

export interface WebTypes {
  $schema: string
  framework: string
  name: string
  version: string
  contributions: {
    html: {
      'types-syntax': string
      'description-markup': string
      tags?: WebTag[]
      attributes?: WebDirective[]
    }
  }
}
