import {FirebaseOptions} from "./types";
import addOrModifyUrl from "./addOrModifyUrl";
import deleteUrl from "./deleteUrl";
import buildSitemap from "./buildSitemap";

interface SitemapManagerOptions {
    database: FirebaseOptions,
    alias: string,
}

export default class SitemapManager {
    readonly name: string
    readonly database: FirebaseOptions
    constructor(options: SitemapManagerOptions) {
        const alias = options.alias.trim()
        if(alias.length === 0) throw new Error("alias name cannot be empty string")
        this.name = alias
        this.database = options.database
    }

    async addOrModify() {
        await addOrModifyUrl()
    }

    async delete() {
        await deleteUrl()
    }

    async build() {
        await buildSitemap({

        })
    }
}