import './styles/index.scss';
import img from './img/05.jpg'

const pc = {
  cpu: 'ryzen',
  ram: 16,
  motherboard: 'Aorus',
  gpu: 'RTX 3090TI'
};

const pc2 = {
  ...pc,
  ram: 12,
  gpu: '1080TI',
};

console.log(pc, pc2);