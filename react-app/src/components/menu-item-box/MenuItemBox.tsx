import { MenuItem } from "../../types/MenuItem";
import { Wrapper } from "./MenuItemBox.styles";

interface IMenuItemBox {
  item: MenuItem;
}

const MenuItemBox = ({ item }: IMenuItemBox) => {
  return (
    <Wrapper>
      <img className="menu-item__img" src={item.url} alt={item.title} />
      <h4 className="menu-item__title">{item.title}</h4>
      <p className="menu-item__text">{item.desc}</p>
      {item.alergies.length > 0 && (
        <p className="menu-item__text">Allergier: {item.alergies}</p>
      )}
      <p className="menu-item__text">Pris: {item.price} kr</p>
    </Wrapper>
  );
};

export default MenuItemBox;
