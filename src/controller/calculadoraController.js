import { ref } from "vue";

const calculadoraController = () => () => {
    const teste = ref(0)

    const altera = () => {
        let total = teste.value + 5
        return total
    }


    return {
        teste,
        altera,
    }
}

export {calculadoraController}