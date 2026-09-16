type JsonLdProps = {
  /** schema.org nodes for this page, emitted as one `@graph` document. */
  nodes: Record<string, unknown>[]
}

/**
 * Structured data for search engines.
 *
 * The payload is authored in this repo rather than taken from user input, but
 * `<` is escaped anyway: a literal `</script` anywhere inside a string would
 * close the tag early and spill the rest of the graph into the document. The
 * escape is a JSON string escape, so parsers still read the original character.
 */
export default function JsonLd({ nodes }: JsonLdProps) {
  const document = { '@context': 'https://schema.org', '@graph': nodes }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(document).replace(/</g, '\\u003c'),
      }}
    />
  )
}
