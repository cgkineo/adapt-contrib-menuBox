import ComponentMenuView from 'core/js/views/ComponentMenuView';
import MenuBoxItemView from './MenuBoxItemView';
import MenuBoxGroupView from './MenuBoxGroupView';

class MenuBoxView extends ComponentMenuView {

  className() {
    return `${super.className()} menubox`;
  }

  addChildren() {
    let nthChild = 0;
    const models = this.model.getChildren().models;
    const childViews = [];
    models.forEach(model => {
      if (!model.get('_isAvailable')) return;

      if (model.get('_isHidden')) {
        model.set('_isReady', true);
        return;
      }

      nthChild++;
      model.set({
        _nthChild: nthChild,
        _totalChild: models.length
      });

      const ChildView = (model.get('_type') === 'menu' && model.get('_menuBox') && model.get('_menuBox')._renderAsGroup) ?
        MenuBoxGroupView :
        MenuBoxItemView;

      const $parentContainer = this.$(this.constructor.childContainer);
      const childView = new ChildView({ model });

      childViews.push(childView);

      $parentContainer.append(childView.$el);
    });

    this.setChildViews(childViews);
  }

}

MenuBoxView.template = 'menuBox';

export default MenuBoxView;
