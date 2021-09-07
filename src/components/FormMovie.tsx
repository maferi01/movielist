import * as React from 'react';


interface IProps {
  comment: string;
  ranking: number;
  onAccept: (comment: string,ranking: number) => void;
}
/**
 * Componente de presentacion para el formlario de datos de la movie
 */
class FormMovie extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    let inputComment: HTMLTextAreaElement | null;
    let inputRanking: HTMLInputElement | null;

    const onClickAceptButton = () => {
      if (!inputComment) return;

      this.accept(inputComment.value,Number.parseInt(inputRanking!.value)); 
    };

    
    return (
      <div className="form-container">
        Comentario:
        <br />
        <textarea ref={(t) => (inputComment = t)} placeholder="insertar comentario..."  defaultValue={this.props.comment}  rows={4} cols={150}/>
        <br />
        Ranking:
        <br />
        <input ref={(t) => (inputRanking = t)} type="number" min="1" max="10"  defaultValue={this.props.ranking?this.props.ranking.toString():'5' }/>

        <button onClick={onClickAceptButton}>Aceptar ... </button>
      </div>
    );
  }

  
  private accept = (comment: string,ranking: number) => {
    if (!comment || !ranking) {
      alert('Datos obligatorios.');
      return;
    }

    this.props.onAccept(comment,ranking);
  };
}

export default FormMovie;
