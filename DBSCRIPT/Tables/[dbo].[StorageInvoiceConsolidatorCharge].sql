USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[StorageInvoiceConsolidatorCharge]    Script Date: 01/09/2024 9:49:16 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
--DROP TABLE [StorageInvoiceConsolidatorCharge]
CREATE TABLE [dbo].[StorageInvoiceConsolidatorCharge](
	[StorageInvoiceConsolidatorChargeID] [int] IDENTITY(1,1) NOT NULL,
	[StorageInvoiceID] [int] NULL,
	[BatchID] [int] NULL,
	[ContainerNumber] [varchar](100) NULL,
	[ISOCodeSize] [varchar](100) NULL,
	[SizeID] [int] NULL,
	[ISOCodeType] [varchar](255) NULL,
	[ArrivalDate] [datetime] NULL,
	[DeliveryMode] [varchar](255) NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[BillCommodityID] [int] NULL,
	[SUBCOMMODITY] [varchar](255) NULL,
	[SUBCOMMODITYID] [int] NULL,
	[PackageType] [varchar](255) NULL,
	[UOM] [varchar](255) NULL,
	[UOMID] [int] NULL,
	[FromDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[Weight] [decimal](10, 2) NULL,
	[Packages] [decimal](10, 2) NULL,
	[TariffHead] [varchar](255) NULL,
	[Rate] [decimal](10, 2) NULL,
	[Discount] [decimal](10, 2) NULL,
	[TaxableAmount] [decimal](10, 2) NULL,
	[GST] [decimal](10, 2) NULL,
	[GSTAmount] [decimal](10, 2) NULL,
	[TotalAmount] [decimal](10, 2) NULL,
	[trnDocumentID] [int] NULL,
	[trnDocumentLotDetailsID] [int] NULL,
	[trnDocumentContainerID] [int] NULL,
	[trnContainerGateInDetailsID] [int] NULL,
	[trnContainerDestuffingID] [int] NULL,
	[trnWorkOrderLotDetailsID] [int] NULL,
	[trnCargoGateInID] [int] NULL,
	[trnTruckDestuffingID] [int] NULL,
	[MstrTariffHeadID] [int] NULL,
	[MSTRTariffHeadName] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[StorageStartDate] [datetime] NULL,
	[NoOfStoragePeriod] [int] NULL,
	[StoragePeriod] [varchar](100) NULL,
	[Qty] [decimal](10, 2) NULL,
	[NoofDays] [int] NULL,
	[LOTNO] [varchar](255) NULL,
	[InvoiceNumber] [varchar](255) NULL,
	[trnEmptyContainerGateInDetailsID] [bigint] NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[StorageInvoiceConsolidatorCharge] ADD  CONSTRAINT [DF_StorageInvoiceConsolidatorCharge_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[StorageInvoiceConsolidatorCharge] ADD  CONSTRAINT [DF_StorageInvoiceConsolidatorCharge_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


