<template>
    <header>
        <h1>
            <img src="@/assets/logo.png" alt="">
        </h1>
        <div class="hass-text-center">
            <button class="button" @click="alterarTema">
                {{ textoBotao }}
            </button>
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/">
                        <i class="fas fa-tasks link"></i>
                        tarefas
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos">
                        <i class="fas fa-project-diagram link"></i>
                        projetos
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BarraLateral',
    emiths:['aoTemaAlterado'],
    data() {
        return{
            modoEscuroAtivo: false
        }
    },
    computed: {
        textoBotao() {
            if(this.modoEscuroAtivo){
                return 'Desativar modo escuro'
            } else{
                return 'Ativar modo escuro'
            }
        }
    },
    methods:{
        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    }
})

</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
    
}
.panel li {
    margin: 8px 0;
}
.link {
    color: white;
}
.link:hover {
    color: white;
}
.link.router-link-active {
    color: white;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
    
}
</style>