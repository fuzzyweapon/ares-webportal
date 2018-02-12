import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    ajax: service(),
    
    actions: {
        categoryChanged(val) {
            this.set('model.config.category', val);
        },
        statusChanged(val) {
            this.set('model.config.status', val);
        },
        save() {
            let aj = this.get('ajax');
            aj.requestOne('saveGame', { config: this.get('model.config') }, null)
            .then( (response) => {
                if (response.error) {
                    return;
                }
        
            this.get('flashMessages').success('Config saved!');
            this.transitionToRoute('setup');
            });  
        }
    }
});