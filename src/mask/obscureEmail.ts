const obscureEmail = (value:string) => {
  const [name, domain] = value.split('@');
  return `${name[0]}${new Array(name.length).join('*')}@${domain}`;
};

export default obscureEmail;
