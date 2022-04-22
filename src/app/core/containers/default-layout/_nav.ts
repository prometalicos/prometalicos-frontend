import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Principal'
  },
  {
    name: 'Administrar',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Concesión',
        url: ''
      },
      {
        name: 'Sede',
        url: ''
      },
      {
        name: 'Subsistema',
        url: ''
      },
      {
        name: 'Usuarios',
        url: ''
      }
    ]
  },
  {
    name: 'Estadísticas',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Vista global',
    iconComponent: { name: 'cil-truck' }
  },
  {
    name: 'Subsistemas',
    title: true
  },
  {
    name: 'Dimensionamiento',
    url: '',
    iconComponent: { name: 'cil-puzzle' }
  },
  {
    name: 'Evasión',
    iconComponent: { name: 'cil-bell-exclamation' },
    badge: {
      color: 'info',
      text: '2'
    }
  },
  {
    name: 'Fuga',
    iconComponent: { name: 'cil-warning' },
    badge: {
      color: 'danger-gradient',
      text: '1'
    }
  },
  {
    name: 'Estática',
    iconComponent: { name: 'cil-square' }
  },
  {
    name: 'Dinámica',
    iconComponent: { name: 'cil-3d' }
  },
  {
    title: true,
    name: 'Informes'
  },
  {
    name: 'Infractores',
    iconComponent: { name: 'cil-flag-alt' },
    children: [
      {
        name: '',
        url: ''
      }
    ]
  },
  {
    name: 'Reportes',
    iconComponent: { name: 'cil-chart' },
    children: [
      {
        name: '',
        url: ''
      }
    ]
  },
  {
    name: 'Periféricos',
    iconComponent: { name: 'cilApplications' },
    children: [
      {
        name: '',
        url: ''
      }
    ]
  },
  {
    name: 'Soporte',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: '',
        url: ''
      }
    ]
  },
  
];
