export const ParserUser = ({
  id,
  name,
  last_name,
  email,
  role,
}: {
  id: string
  name: string
  last_name: string
  email: string
  role: string
}) => {
  return {
    id: id,
    name: name,
    last_name: last_name,
    email: email,
    role: role,
  }
}
