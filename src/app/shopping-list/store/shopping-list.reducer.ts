import { Ingredients } from '../../shared/ingredients.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
  ingredients: Ingredients[];
  editedIngredient: Ingredients;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredients('tomat', 5), new Ingredients('Gurka', 15)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export const shoppingListReducer = (
  state: State = initialState,
  action: ShoppingListActions.ShoppingListActions
) => {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      // const updIngredient = [...state.ingredients].map((item, index) => {
      //   if (index == action.payload.index) {
      //     item = action.payload.Ingredients;
      //     return item;
      //   } else {
      //     return item;
      //   }
      // });
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient: null,
      };

    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, index) => {
          return index !== state.editedIngredientIndex;
        }),
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredient: { ...state.ingredients[action.payload] },
        editedIngredientIndex: action.payload,
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    default:
      return state;
  }
};
