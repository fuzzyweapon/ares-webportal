import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RouteTransitionOnError from 'ares-webclient/mixins/route-transition-on-error';
import RouteResetFormOnExit from 'ares-webclient/mixins/route-reset-form-on-exit';

export default Route.extend(RouteTransitionOnError, RouteResetFormOnExit, {
    ajax: service(),
    session: service(),
    errorRoute: 'forum',
    
    model: function(params) {
        let aj = this.get('ajax');
        return aj.queryOne('forumCategory', {category_id: params['category_id']});
    },
    
    titleToken: function(model) {
        return model.name;
    }
    
});