USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnPreProformaCargoBasedStorage]    Script Date: 04/09/2024 3:56:15 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnPreProformaCargoBasedStorage](
	[trnPreProformaCargoBasedStorageID] [int] IDENTITY(1,1) NOT NULL,
	[trnPreProformaID] [int] NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[BillCommodityID] [int] NULL,
	[TarrifHead] [varchar](255) NULL,
	[TarrifHeadID] [int] NULL,
	[UOM] [varchar](255) NULL,
	[UOMID] [int] NULL,
	[StorageStartDate] [varchar](255) NULL,
	[StorageEndDate] [varchar](255) NULL,
	[NoOfStoragePeriod] [int] NULL,
	[StoragePeriod] [varchar](255) NULL,
	[Area] [decimal](10, 2) NULL,
	[QTY] [decimal](10, 2) NULL,
	[Weight] [decimal](10, 2) NULL,
	[Rate] [decimal](10, 2) NOT NULL,
	[Total] [decimal](10, 2) NOT NULL,
	[Discountamt] [decimal](10, 2) NOT NULL,
	[Netamount] [decimal](10, 2) NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[GSTPer] [decimal](10, 2) NOT NULL,
	[IsFinished] [bit] NOT NULL,
	[Subcommodity] [varchar](255) NULL,
	[SubcommodityID] [varchar](255) NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  CONSTRAINT [DF_trnPreProformaCargoBasedStorage_Area]  DEFAULT ((0)) FOR [Area]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  CONSTRAINT [DF_trnPreProformaCargoBasedStorage_QTY]  DEFAULT ((0)) FOR [QTY]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  CONSTRAINT [DF_trnPreProformaCargoBasedStorage_Weight]  DEFAULT ((0)) FOR [Weight]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  CONSTRAINT [DF_trnPreProformaCargoBasedStorage_Rate]  DEFAULT ((0)) FOR [Rate]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  CONSTRAINT [DF_trnPreProformaCargoBasedStorage_Total]  DEFAULT ((0)) FOR [Total]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  CONSTRAINT [DF_trnPreProformaCargoBasedStorage_Discountamt]  DEFAULT ((0)) FOR [Discountamt]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  CONSTRAINT [DF_trnPreProformaCargoBasedStorage_Netamount]  DEFAULT ((0)) FOR [Netamount]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  CONSTRAINT [DF_trnPreProformaCargoBasedStorage_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  CONSTRAINT [DF_trnPreProformaCargoBasedStorage_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  DEFAULT ((0)) FOR [GSTPer]
GO

ALTER TABLE [dbo].[trnPreProformaCargoBasedStorage] ADD  DEFAULT ((0)) FOR [IsFinished]
GO
