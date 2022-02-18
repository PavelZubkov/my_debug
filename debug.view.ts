namespace $.$$ {
	
	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		state() {
			return new $mol_state_shared
		}

		counter( next?: number ) {
			return Number(this.state().doc('my_debug').sub('counter').value( next ) ?? 0)
		}

		value() {
			return this.counter()
		}

		override submit() {
			this.counter( this.counter() + 1 )
		}


		@ $mol_mem
		state2() {
			return new $mol_state_shared
		}

		counter2( next?: number ) {
			return Number(this.state2().doc('my_debug2').sub('counter').value( next ) ?? 0)
		}

		value2() {
			return this.counter2()
		}

		override submit2() {
			this.counter2( this.counter2() + 1 )
		}
	}

}
