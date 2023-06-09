// Custom `getStaticProps` causes `404.html` not to be generated during export
export const getStaticProps = async () => {
  return {
    props: {}
  }
}

export default () => {
  return <h1>404 - Page Not Found</h1>
}
