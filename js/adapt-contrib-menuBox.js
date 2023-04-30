import components from 'core/js/components';
import ComponentMenuModel from 'core/js/models/ComponentMenuModel';
import MenuBoxView from './MenuBoxView';

components.register('menuBox', {
  view: MenuBoxView,
  model: ComponentMenuModel.extend({})
});
