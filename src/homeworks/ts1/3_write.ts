import { Category } from '../../../src/entities/Category/Model/Category';
import { getRandomNumber, getRandomString } from '../../app/services/HelperService';
import { categories } from '../../entities/Category/Const/CategoryConst';

const Operations = ['Cost', 'Profit'] as const;
type TOperation = (typeof Operations)[number];

/**
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 */
class Operation {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  readonly type: TOperation;

  constructor(
    id: string,
    name: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: TOperation,
    desc?: string
  ) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.amount = amount;
    this.category = category;
    this.type = type;
    this.desc = desc;
  }
}

/**
 * Трата (Cost)
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 * */
class Cost implements Operation {
  id: string;
  name: string;
  desc: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: TOperation = 'Cost';

  constructor(id: string, name: string, createdAt: string, amount: number, category: Category, desc?: string) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.amount = amount;
    this.category = category;
    this.desc = desc;
  }
}

/**
 * Доход (Profit)
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */
class Profit implements Operation {
  id: string;
  name: string;
  desc: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: TOperation = 'Profit';

  constructor(id: string, name: string, createdAt: string, amount: number, category: Category, desc?: string) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.amount = amount;
    this.category = category;
    this.desc = desc;
  }
}

//Максимальное число операции
const maxOperationAmount = 10;

//Список операций
const operations = ['Аренда', 'Курсы', 'Обучение', 'Работа'];

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string) => {
  const categoryIndex = getRandomNumber(categories.length);
  const category = categories[categoryIndex];

  const operationIndex = getRandomNumber(operations.length);
  const operationName = operations[operationIndex];

  const operationTypeIndex = getRandomNumber(Operations.length);
  const operationType = Operations[operationTypeIndex] as TOperation;

  const amount = getRandomNumber(maxOperationAmount, 1);
  return new Operation(getRandomString(), operationName, createdAt, amount, category, operationType);
};
