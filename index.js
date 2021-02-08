// An employee list with
// - name
// - job position
// - administrative role
//   - "editor"
//   - "admin",
//   - "no rights"

const administrativeRoles = {
  editor: 'editor',
  admin: 'admin',
  noRights: 'no rights',
};

const employee1 = {
  id: 1,
  name: 'karl',
  jobPosition: 'developer',
  administrativeRole: administrativeRoles.editor,
};

const employee2 = {
  id: 2,
  name: 'johanna',
  jobPosition: 'ceo',
  administrativeRole: administrativeRoles.admin,
};

const employeeList = [employee1, employee2];

console.log(employeeList);
