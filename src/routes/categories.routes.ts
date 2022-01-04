import { Router } from 'express';

import { CreateCategoryController } from '../controllers/CategoriesControllers/CreateCategoryController';
import { DeleteCategoryController } from '../controllers/CategoriesControllers/DeleteCategoryController';
import { GetAllCategoriesController } from '../controllers/CategoriesControllers/GetAllCategoriesController';
import { UpdateCategoryController } from '../controllers/CategoriesControllers/UpdateCategoryController';

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const deleteCategoryController = new DeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', getAllCategoriesController.handle);
categoriesRoutes.delete('/:id', deleteCategoryController.handle);
categoriesRoutes.put('/:id', updateCategoryController.handle);

export { categoriesRoutes };
