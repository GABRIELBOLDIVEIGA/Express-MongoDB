import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O titulo do livro é obrigatório."]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "O autor(a) é obrigatório."]
    },
    editora: {
      type: String,
      required: [true, "O editora é obrigatório."],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido."
      }
    },
    numeroPaginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve ser entre 10 e 5000. Valor fornecido {VALUE}.",
        // min: [10, "O número minimo de páginas é 10. Valor fornecido {VALUE}."],
        // max: [5000, "O número maximo de páginas é 5000. Valor fornecido {VALUE}"]
      }
    }
  },
  {
    versionKey: false
  }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;