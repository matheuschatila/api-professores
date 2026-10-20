let professores = [
    {
        id: 1,
        nome: "Matheus Chatila",
        idade: 24,
        departamento: "Informática",
        turmas: [
            {
                codigo: "T01",
                disciplina: "Business Intelligence",
                alunos: ["João", "Pedro"]
            }
        ]
    },
    {
        id: 2,
        nome: "Rafael Moreno",
        idade: 40,
        departamento: "Informática",
        turmas: [
            {
                codigo: "T02",
                disciplina: "Desenvolvimento Web Front-End",
                alunos: ["Ana", "Lucas"]
            }
        ]
    }
];

exports.listarProfessores = (req, res) => {
    res.json(professores);
};

exports.buscarProfessor = (req, res) => {
    const professor = professores.find(p => p.id == req.params.id);

    if (!professor) {
        return res.json({ mensagem: "Id não existente" });
    }

    res.json(professor);
};

exports.listarTurmas = (req, res) => {
    const professor = professores.find(p => p.id == req.params.id);

    if (!professor) {
        return res.json({ mensagem: "Id não existente" });
    }

    res.json(professor.turmas);
};

exports.atualizarProfessor = (req, res) => {
    const professor = professores.find(p => p.id == req.params.id);

    if (!professor) {
        return res.json({ mensagem: "Id não existente" });
    }

    professor.nome = req.body.nome;
    professor.idade = req.body.idade;
    professor.departamento = req.body.departamento;

    res.json(professor);
};

exports.adicionarTurma = (req, res) => {
    const professor = professores.find(p => p.id == req.params.id);

    if (!professor) {
        return res.json({ mensagem: "Id não existente" });
    }

    professor.turmas.push(req.body);

    res.json(professor);
};

exports.listarPorDepartamento = (req, res) => {
    const resultado = professores.filter(
        p => p.departamento.toLowerCase() == req.params.departamento.toLowerCase()
    );

    res.json(resultado);
};

exports.removerProfessor = (req, res) => {
    const indice = professores.findIndex(p => p.id == req.params.id);

    if (indice == -1) {
        return res.json({ mensagem: "Id não existente" });
    }

    professores.splice(indice, 1);

    res.json({ mensagem: "Professor removido com sucesso" });
};
