import MenuItemView from 'core/js/views/menuItemView';
import router from 'core/js/router';

class MenuBoxItemView extends MenuItemView {

  className() {
    return `${super.className()} menubox-item`;
  }

  events() {
    return {
      'click .js-btn-click': 'onClickMenuItemButton'
    };
  }

  onClickMenuItemButton(event) {
    if (event && event.preventDefault) event.preventDefault();
    if (this.model.get('_isLocked')) return;
    router.navigateToElement(this.model.get('_id'));
  }
}

MenuBoxItemView.template = 'menuBoxItem';

export default MenuBoxItemView;
