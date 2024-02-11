import { skillReactivo, skillInput, Ordernar } from './TheList.vue';

export const save = () => {
const nextId = skillReactivo.value.length + 1;
if (skillInput.value.length == 0) {
return alert('Ingrese una habilidad');
}
const findSkills = skillReactivo.value.find(i => i.name.toLowerCase() == skillInput.value.toLowerCase());
if (findSkills != null) {
return alert('Habilidad en existencia');
}
skillReactivo.value.push(
{
id: nextId,
name: skillInput.value
}
);
skillInput.value = '';
Ordernar();
};
