import Vue, {VueConstructor} from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

interface VueOptions {
  [key: string]: any;
}
type VueWithPlugin = VueConstructor & {http: { options: VueOptions}};

(Vue as typeof VueResource).http.options.root = '/';
