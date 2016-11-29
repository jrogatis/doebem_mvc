const angular = require('angular');
const ngRoute = require('angular-route');
const jkAngularCarousel = require('../../../node_modules/angular-jk-carousel/dist/jk-carousel.js');
import routing from './pag-ongs.routes';
import contactForm from '../../components/contact-form/contact-form.component';

export class ListOngsController {
  $http;
  $scope;
  $routeParams;
  stepOptions = [];
  listOngFilters = [];
  listOng = [];
  pageTitle;
  pageImage;
  listOngToDisplay = [];

  /*@ngInject*/
  constructor($http, $scope, socket, $routeParams) {
    this.$http = $http;
    this.$scope = $scope;
    this.$routeParams = $routeParams;
    this.pageTitle;
    this.pageImage;
    this.listOngToDisplay;

    this.listOng = [ 
      {
        nome: 'Exemplo 1',
        areaDeAtuacao: 'educacao',
        desc: 'Bla Bla Bla Bla Bla Bla',
        logo: '../../assets/images/educacao/gauss/logo-gauss.png',
        localidades: 'Rio de Janeiro'
      },
      {
        nome: 'Exemplo 2',
        areaDeAtuacao: 'educacao',
        desc: 'Bla Bla Bla Bla Bla Bla',
        logo: '../../assets/images/educacao/gauss/logo-gauss.png',
        localidades: 'Rio de Janeiro'
      },
      {
        nome: 'Exemplo 3',
        areaDeAtuacao: 'educacao',
        desc: 'Bla Bla Bla Bla Bla Bla',
        logo: '../../assets/images/educacao/gauss/logo-gauss.png',
        localidades: 'Rio de Janeiro'
      },    
      {
        nome: 'Exemplo 1',
        areaDeAtuacao: 'saude',
        desc: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ',
        logo: '../../assets/images/educacao/gauss/logo-gauss.png',
        localidades: 'São Paulo'
      },
      {
        nome: 'Exemplo 2',
        areaDeAtuacao: 'saude',
        desc: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ',
        logo: '../../assets/images/educacao/gauss/logo-gauss.png',
        localidades: 'São Paulo'
      },
      {
        nome: 'Exemplo 3',
        areaDeAtuacao: 'saude',
        desc: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla ',
        logo: '../../assets/images/educacao/gauss/logo-gauss.png',
        localidades: 'São Paulo'
      },
      {
        nome: 'Exemplo 1',
        areaDeAtuacao: 'combateAPobreza',
        desc: 'Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla',
        logo: '../../assets/images/educacao/gauss/logo-gauss.png',
        localidades: 'Rio de Janeiro - São Paulo'
      },
      {
        nome: 'Exemplo 2',
        areaDeAtuacao: 'combateAPobreza',
        desc: 'Bla Bla Bla Bla Bla Bla',
        logo: '../../assets/images/educacao/gauss/logo-gauss.png',
        localidades: 'Rio de Janeiro - São Paulo'
      },
      {
        nome: 'Exemplo 3',
        areaDeAtuacao: 'combateAPobreza',
        desc: 'Bla Bla Bla Bla Bla Bla',
        logo: '../../assets/images/educacao/gauss/logo-gauss.png',
        localidades: 'Rio de Janeiro - São Paulo'
      }       
    ];

    this.listOngFilters = [
      {
        title: 'Educação',
        image: './assets/images/educacao/lousa_edu3.jpg'
      },
      {
        title: 'CombateAPobreza',
        image: './assets/images/combate_pobreza/1.jpg'
      },
      {
        title: 'Saude',
        image: './assets/images/saude/2.jpg'
      }
    ];
  }

  $onInit() {
     this.setPageFilter();
  }

  setPageFilter() {
    switch (this.$routeParams.filterCausa) {

      case 'saude':
        this.pageTitle = 'Saúde';
        this.pageImage = './assets/images/saude/2.jpg';
        this.listOngFilterToDisplay();
        break;
      case 'combateAPobreza':
        this.pageTitle = 'Combate a Pobreza';
        this.pageImage = './assets/images/combate_pobreza/1.jpg';
        this.listOngFilterToDisplay();
        break;
      case 'educacao':
        this.pageTitle = 'Educação';
        this.pageImage = './assets/images/educacao/lousa_edu3.jpg';
        this.listOngFilterToDisplay();
        break;
      default:
        this.pageTitle = 'Ongs que apoiamos';
        this.pageImage = './assets/images/educacao/lousa_edu3.jpg';
        this.listOngToDisplay = this.listOng;
    }
  }

  listOngFilterToDisplay() {
    this.listOng.map(ong => {
      if (ong.areaDeAtuacao === this.$routeParams.filterCausa) {
          this.listOngToDisplay.push(ong);
      }
    });
  }
}

export default angular.module('doebemOrgApp.pagOngs', [ngRoute, 'jkAngularCarousel', contactForm]) 
  .config(routing) 
  .component('pagOngs', {template: require('./pag-ongs.pug'), controller: ListOngsController})
  .name;