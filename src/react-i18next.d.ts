import "react-i18next";

import type * as translations from "locales";

declare module "react-i18next" {
    type DefaultResources = typeof translations;
    type Resources = DefaultResources;
}

declare module "react-i18next" {
    type Namespace = keyof typeof translations;
    type Keys<N extends Namespace> = keyof typeof translations[N];

    interface TFunction<
        TResult extends TFunctionResult = string,
        TKeys extends TFunctionKeys = string,
        TInterpolationMap extends object = StringMap
    > {
        // basic usage
        (key: TKeys | TKeys[], options?: TOptions<TInterpolationMap> | string): TResult;
        // overloaded usage
        (key: TKeys | TKeys[], defaultValue?: string, options?: TOptions<TInterpolationMap> | string): TResult;
    }

    type UseTranslationResult<N> = {
        t: TFunction<string, Keys<N>>;
        i18n: i18n;
        ready: boolean;
    };
    export function useTranslation<N extends Namespace>(ns: N, options?: UseTranslationOptions): UseTranslationResult<N>;
}