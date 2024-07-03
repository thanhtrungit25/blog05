export default async function globalTearDown() {
  await global.__MONGOINSTANCE.stop()
}
