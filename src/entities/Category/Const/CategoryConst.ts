import { Category } from '../../Category/Model/Category';
import { getRandomString } from '../../../app/services/HelperService';

//Список категорий
export const categories: Category[] = [
  new Category(getRandomString(), 'Нонфикшн'),
  new Category(getRandomString(), 'Художественная литература'),
  new Category(getRandomString(), 'Биографии / Мемуары'),
  new Category(getRandomString(), 'Книги на иностранных языках'),
  new Category(getRandomString(), 'Книги о кино'),
  new Category(getRandomString(), 'Книги о музыке'),
];
