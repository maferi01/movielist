import * as React from 'react';

import { KeycodeEnum } from '../enums/KeycodeEnum';

interface IProps {
  query: string;
  onFilter: (query: string) => void;
}
/**
 * Componente de presentacion para el formalrio de filtrado de movies
 */
class FilterMovies extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    let inputTitle: HTMLInputElement | null;

    const onClickFilterButton = () => {
      if (!inputTitle) return;

      this.filter(inputTitle.value);
    };

    
    return (
      <div className="form-container">
        <br />
        <input ref={(t) => (inputTitle = t)} type="text" placeholder="Título..." onKeyUp={this.onKeyUpHandler} defaultValue={this.props.query}/>
        <br />
        <button onClick={onClickFilterButton}>Buscar películas... </button>
      </div>
    );
  }

  private onKeyUpHandler = (e: React.KeyboardEvent) => {
    if (e.keyCode != KeycodeEnum.ENTER) return;

    const input: HTMLInputElement = e.target as HTMLInputElement;
    this.filter(input.value);
  };

  private filter = (strInput: string) => {
    if (!strInput) {
      alert('Datos obligatorios.');
      return;
    }

    this.props.onFilter(strInput);
  };
}

export default FilterMovies;
