declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare class $my_debug_foo {
    get bar(): $my_debug_bar;
}

declare class $my_debug_bar extends $my_debug_foo {
}

export = $;