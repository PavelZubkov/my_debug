namespace $ {

	export class $my_debug_model extends $mol_object2 {

		@ $mol_mem
		state() {
			return new $mol_state_shared
		}

		@ $mol_mem
		doc() {
			return this.state().doc('my_debug')
		}

		name(next?: string) {
			return String(this.doc().sub('name').value(next) ?? '')
		}

		counter(next?: number) {
			return Number(this.doc().sub('counter').value(next) ?? 0)
		}

		@ $mol_action
		counter_inc(num = 1) {
			this.counter( this.counter() + num )
		}

	}

}
