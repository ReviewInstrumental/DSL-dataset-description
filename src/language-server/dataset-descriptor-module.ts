// import { createDefaultModule, DefaultModuleContext, inject, LangiumServices, Module, PartialLangiumServices } from 'langium';
import { LangiumServices, Module, PartialLangiumServices, LangiumSharedServices, DefaultSharedModuleContext, inject, createDefaultSharedModule, createDefaultModule } from 'langium';
import { DatasetDescriptorGeneratedModule, datasetDescriptorGeneratedSharedModule } from './generated/module';
import { DatasetDescriptorValidationRegistry, DatasetDescriptorValidator } from './dataset-descriptor-validator';
import { DatasetDescriptorDescriptionProvider } from './dataset-descriptor-index';
import { Generator, DocumentationGenerator } from './dataset-descriptor-documentation';
import { DatasetUploader, Uploader } from './dataset-descriptor-uploader';


/**
 * Declaration of custom services - add your own service classes here.
 */
export type DatasetDescriptorAddedServices = {
    validation: {
        DatasetDescriptorValidator: DatasetDescriptorValidator
    },
    generation: {
        DocumentationGenerator: Generator
    },
    uploader: {
        DatasetUploader: Uploader
    }
}

/**
 * Union of Langium default services and your custom services - use this as constructor parameter
 * of custom service classes.
 */
export type DatasetDescriptorServices = LangiumServices & DatasetDescriptorAddedServices

/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
export const DatasetDescriptorModule: Module<DatasetDescriptorServices, PartialLangiumServices & DatasetDescriptorAddedServices> = {
    validation: {
        ValidationRegistry: (injector) => new DatasetDescriptorValidationRegistry(injector),
        DatasetDescriptorValidator: () => new DatasetDescriptorValidator()
    },
    index: {
        AstNodeDescriptionProvider: (services) => new DatasetDescriptorDescriptionProvider(services)
    },
    generation: {
        DocumentationGenerator: (injector) => new DocumentationGenerator(injector)
    },
    uploader: {
        DatasetUploader: (injector) => new DatasetUploader(injector)
    }
};

/**
 * Inject the full set of language services by merging three modules:
 *  - Langium default services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 */
 export function createDatasetDescriptorServices(context?: DefaultSharedModuleContext): {
    shared: LangiumSharedServices,
    datasetDescription: DatasetDescriptorServices
} {
    const shared = inject(
        createDefaultSharedModule(context),
        datasetDescriptorGeneratedSharedModule
    );
    const datasetDescription = inject(
        createDefaultModule({ shared }),
        DatasetDescriptorGeneratedModule,
        DatasetDescriptorModule
    );
    shared.ServiceRegistry.register(datasetDescription);
    return { shared, datasetDescription };
}