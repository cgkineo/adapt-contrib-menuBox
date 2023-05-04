import MenuItemView from 'core/js/views/menuItemView';
import MenuBoxItemView from './MenuBoxItemView';

class MenuBoxGroupView extends MenuItemView {

  className() {
    return `${super.className()} menubox-group`;
  }

  get childrenToAdd() {
    return this.model.getAvailableChildModels().filter(model => model.isTypeGroup('contentobject'));
  }

  postRender() {
    _.defer(this.addChildren.bind(this));
    this.$el.imageready(this.setReadyStatus.bind(this));
    this.$el.parents('.menubox__item-container').addClass('has-groups');
  }
}

MenuBoxGroupView.template = 'menuBoxGroup';
MenuBoxGroupView.childContainer = '.js-group-children';
MenuBoxGroupView.childView = MenuBoxItemView;

export default MenuBoxGroupView;
