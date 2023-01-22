import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from '../Views/Tarefas.vue'
import Projetos from '../Views/Projetos.vue'
import Formulario from '../Views/Projetos/Formulario.vue'
import Lista from '../Views/Projetos/Lista.vue'

const rotas: RouteRecordRaw[] =[
{
    path: '/',
    name: 'tarefas',
    component: Tarefas
}, 
{
    path: '/projetos',
    component: Projetos,
    children:[
        {
            path: '',
            name: 'projetos',
            component: Lista
        },
        {
            path: 'novo',
            name: 'novo projeto',
            component: Formulario
        },
        {
            path: ':id',
            name: 'editar projeto',
            component: Formulario,
            props: true
        }
    ]
}
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})


export default roteador