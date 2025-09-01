import {View, StyleSheet, ScrollView, Alert} from "react-native";
import Header from "../components/Header";
import BtnCont from "../components/BtnCont";
import AddTask from "../components/AddTask";
import TasksEmpty from "../components/TasksEmpty";
import sizes from "../design/sizes";
import colors from "../design/colors";
import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import {useEffect, useState} from "react";

function HomeScreen() {
    // Lista de tarefas
    const [lista, setLista] = useState([]);

    // Lista filtrada
    const [listaFiltrada, setListaFiltrada] = useState([]);

    // Variável para controle da lista a set exibida
    const [exibir, setExibir] = useState("all");

    // Variáveis para controle da quantidade de concluídos e pendentes
    const [totalCriado, setTotalCriado] = useState(0);
    const [totalConcluido, setTotalConcluido] = useState(0);

    // Variável do texto do cadastro
    const [inputCadastro, setInputCadastro] = useState("");

    // Input de pesquisa
    const [searchInput, setSearchInput] = useState("");

    // Função para alterar exibição
    function alterarExibir(text) {
        if (text !== exibir) {
            return setExibir(text);
        }
        // Define todas
        return setExibir('all');
    }

    // Função para cadastrar tarefa
    function cadastrarTarefa() {

        // Caso o valor esteja vazio, retorna
        if (!inputCadastro.trim()) {
            Alert.alert('Informe o título da tarefa');
            return;
        }

        // Cria a cópia da lista
        const copiaLista = [...lista];

        // Verifica se já tem uma tarefa com esse título
        const filtro = copiaLista.find((item) => item.texto === inputCadastro);

        // Caso o filtro seja diferente de undefined, não permite que cadastre a tarefa
        if (filtro) {
            Alert.alert('Tarefa já cadastrada')
            return;
        }

        copiaLista.push({
            id: Date.now(),
            texto: inputCadastro,
            concluido: false
        })

        // Limpa o campo input
        setInputCadastro('');

        return setLista(copiaLista);
    }

    // Função para concluir tarefa
    function onConcluirClick(id) {
        let copiaLista = [...lista];

        // Atualiza o valor de concluído a partir do ID
        copiaLista = copiaLista.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    concluido: !item.concluido
                }
            }

            return item;
        })

        // Atualiza a lista
        return setLista(copiaLista);
    }

    // Função para excluir tarefa
    function onDeleteClick(id) {
        // Cópia da lista
        let copiaLista = [...lista];

        // Filtra a lista e retira o item com o mesmo ID do parâmetro
        copiaLista = copiaLista.filter((item) => item.id !== id)

        // Atualiza a lista
        return setLista(copiaLista);
    }

    // Use effect para contar tarefas criadas e concluídas
    useEffect(() => {
        let contarTotalCriado = 0;
        let contarTotalConcluido = 0;

        // Caso não tenha nada no searchInput
        if (!searchInput.trim()) {
            // Percorre toda a lista e conta as tarefas criadas e concluídas
            lista.map((item) => item.concluido ? contarTotalConcluido++ : contarTotalCriado++);
        } else {
            // Percorre toda a lista e conta as tarefas criadas e concluídas
            lista.map((item) => item.concluido && item.texto.includes(searchInput) ? contarTotalConcluido++ : !item.concluido && item.texto.includes(searchInput) ? contarTotalCriado++ : null);
        }

        // Salva os valores no useState
        setTotalCriado(contarTotalCriado);
        setTotalConcluido(contarTotalConcluido);

    }, [lista, searchInput]);

    // Função para organizar a lista
    function organizarLista(copiaLista) {
        // Cria listas para separar tarefas concluídas e pendentes
        let tarefasConcluidas = []
        let tarefasPendetes = []

        // Filtra tarefas pendentes e concluídas
        copiaLista.map((item) => item.concluido ? tarefasConcluidas.push(item) : tarefasPendetes.push(item));

        // Une as duas listas
        return tarefasPendetes.concat(tarefasConcluidas);
    }

    // UseEffect para filtrar a lista de tarefas
    useEffect(() => {
        // Cria uma cópia da lista
        let copiaLista = [...lista];

        // Filtra a lista
        if (!searchInput.trim()) {
            if (exibir === "criadas") { // Criadas sem filtro
                copiaLista = copiaLista.filter((item) => !item.concluido);
            } else if (exibir === 'concluidas') { // Concluídas sem filtro
                copiaLista = copiaLista.filter((item) => item.concluido);
            } else {
                // Organiza a lista
                copiaLista = organizarLista(copiaLista);
            }
        } else {
            if (exibir === "criadas") { // Criadas com filtro
                copiaLista = copiaLista.filter((item) => !item.concluido && item.texto.toLowerCase().includes(searchInput.toLowerCase()));
            } else if (exibir === 'concluidas') { // Concluídas com filtro
                copiaLista = copiaLista.filter((item) => item.concluido && item.texto.toLowerCase().includes(searchInput.toLowerCase()));
            } else {
                // Organiza a lista
                copiaLista = organizarLista(copiaLista);

                // Filtra a lista
                copiaLista = copiaLista.filter((item) => item.texto.toLowerCase().includes(searchInput.toLowerCase()));
            }
        }

        // Atualiza a lista filtrada
        return setListaFiltrada(copiaLista);
    }, [searchInput, exibir, lista]);

    return (
        <ScrollView style={styles.father}>

            <Header />

            <AddTask fnCadastrar={cadastrarTarefa} inputCadastro={inputCadastro} setInputCadasto={setInputCadastro} />

            <View style={styles.container}>
                <BtnCont
                    type={"criadas"}
                    numero={totalCriado}
                    fnShow={() => alterarExibir('criadas')}
                    exibir={exibir === 'criadas' ? true : false}
                />
                <BtnCont
                    type={"concluidas"}
                    numero={totalConcluido}
                    fnShow={() => alterarExibir('concluidas')}
                    exibir={exibir === 'concluidas' ? true : false}
                />
            </View>

            <SearchInput input={searchInput} setInput={setSearchInput} />

            {
                !listaFiltrada.length ? (
                    <TasksEmpty />
                ) : listaFiltrada.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            concluido={item.concluido}
                            texto={item.texto}
                            fnConcluir={() => onConcluirClick(item.id)}
                            fnExcluir={() => onDeleteClick(item.id)}
                        />
                    )
                })
            }

        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: sizes.marginHorizontal,
        marginTop: sizes.paddingLarge,
        paddingBottom: sizes.paddingMedium,
        borderBottomWidth: 2,
        borderBottomColor: colors.gray330,
    },
    father: {
        paddingBottom: 50
    }
})